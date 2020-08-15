import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

class Share extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mt-5 mb-5">共有する</h2>
                        <span>相手の個人コードを入力してください。</span>
                        <TextField className="mt-5 field" />
                        <Button className="text-center mt-5 pt-3 pb-3  mx-auto memo" variant="contained" color="primary">共有する</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Share;
