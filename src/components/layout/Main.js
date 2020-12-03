import React, { useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import Map from '../map/Map';
import CourtList from '../courts/CourtList';
import AddCourt from '../courts/AddCourt';

const Main = () => {
    const [mapSelector, setMapSelector] = useState(false);

    return (
			<Grid container>
				<Grid item xs={12} sm={6} md={7} lg={8} xl={9}>
					<Map mapSelector={mapSelector} />
				</Grid>
				{/* <Hidden xsDown>
						<Grid item sm={6} md={5} lg={4} xl={3}>
							<CourtList />
						</Grid>
					</Hidden> */}
				<Grid item xs={12} sm={6} md={5} lg={4} xl={3}>
					<AddCourt mapSelector={mapSelector} setMapSelector={setMapSelector} />
				</Grid>
			</Grid>
		);
}

export default Main;
