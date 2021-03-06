import React from "react";
import {
  Header,
  Card,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";
import { photos, albums } from "../data";
import { fetchPhotos } from "../services/PhotoService";
import { fetchAlbums } from "../services/AlbumService";

const Photo = props => {
  const {
    id,
    imageUrl = "https://images.pexels.com/photos/948331/pexels-photo-948331.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description = "Unknown",
    createdAt = "Unknown",
    onPhotoDelete
  } = props;

  return (
    <Card>
      <Image src={imageUrl} wrapped ui={false} />
      <Icon
        name="close"
        size="large"
        onClick={() => {
          onPhotoDelete(id);
        }}
      />
      <Card.Content>
        <Card.Header>{description}</Card.Header>
        <Card.Meta>
          <span className="date">{createdAt}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

class PhotosApp extends React.Component {
  state = {
    photos: photos,
    albums: []
  };

  async componentDidMount() {
    const [photos, albums] = await Promise.all([fetchPhotos(), fetchAlbums()]);

    this.setState({
      photos,
      albums
    });
  }

  deletePhoto = id => {
    // [1, 2, 3] -> [1, 2]
    const newPhotos = this.state.photos.filter(photo => photo.id !== id);

    this.setState({
      photos: newPhotos
    });
  };

  // Performance optimalization
  handleLinkClick = event => {
    console.log(event.target.attributes["data-id"].value);
  };

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            onHide={() => {}}
            vertical
            visible={true}
            width="wide"
          >
            {this.state.albums.map(album => {
              return (
                <Menu.Item
                  as="a"
                  key={album.id}
                  onClick={() => alert(album.id)}
                >
                  {album.name}
                </Menu.Item>
              );
            })}
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Card.Group>
                {this.state.photos.map(photo => (
                  <Photo
                    key={photo.id}
                    id={photo.id}
                    imageUrl={photo.image}
                    description={photo.desc}
                    createdAt={photo.date}
                    onPhotoDelete={this.deletePhoto}
                  />
                ))}
              </Card.Group>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default PhotosApp;
