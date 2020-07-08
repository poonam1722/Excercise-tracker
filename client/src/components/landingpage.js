import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render()
    {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid classname="landing-grid">
                    <cell col={12}></cell>
                </Grid>
            </div>
        )
    }
}