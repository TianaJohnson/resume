// import React from 'react';
// import {    GoogleMap,
//             useLoadScript,
//             Marker, 
//             infoWindo} from 'google-maps-react/api';
// import { formatRelitive } from 'date-fns';


// export default function Map() {
//     return (
//         <GoogleMap defaultZoom={10} defaultCenter={{ lat:12, lng:12 }}/>
//     )
// };

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// import { Map, GoogleApiWrapper, MapContainer } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };
// function MapGoo () {
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


// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCNdWSi15D0AoW3Hi4txUN0qAL7j_ZSdQ0'
// })(MapContainer);