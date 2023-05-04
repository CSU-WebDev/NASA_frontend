const nasaResponse= {"photos":[{"id":102685,"sol":1004,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG","earth_date":"2015-06-03","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":102686,"sol":1004,"camera":{"id":20,"name":"FHAZ","rover_id":5,"full_name":"Front Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG","earth_date":"2015-06-03","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":102842,"sol":1004,"camera":{"id":21,"name":"RHAZ","rover_id":5,"full_name":"Rear Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG","earth_date":"2015-06-03","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}},{"id":102843,"sol":1004,"camera":{"id":21,"name":"RHAZ","rover_id":5,"full_name":"Rear Hazard Avoidance Camera"},"img_src":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG","earth_date":"2015-06-03","rover":{"id":5,"name":"Curiosity","landing_date":"2012-08-06","launch_date":"2011-11-26","status":"active"}}]}
import React from 'react';
import { render, screen } from '@testing-library/react';
import Mars from '../components/Mars.jsx';

it('Checks earth date in mars application', () => {
  render(<Mars nasaResponse={nasaResponse}/>);
  expect(screen.getAllByText("Earth Date: " + nasaResponse.photos[0].earth_date)[0]).toBeInTheDocument();
});

it('Checks Name in mars application', () => {
  render(<Mars nasaResponse={nasaResponse}/>);
  expect(screen.getAllByText("Earth Date: " + nasaResponse.photos[0].earth_date)[0]).toBeInTheDocument();
});
