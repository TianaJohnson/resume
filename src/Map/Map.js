import React from 'react';
import { GoogleMap } from 'react-google-maps';

export default function Map() {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat:12, lng:12 }}/>
    )
}





// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//          lat: -1.2884,
//          lng: 36.8233
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCNdWSi15D0AoW3Hi4txUN0qAL7j_ZSdQ0'
// })(MapContainer);