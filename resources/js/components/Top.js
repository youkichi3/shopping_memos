import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
import '../../../public/css/top.css';

class Top extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mt-5">メモ集</h2>
                        <Button className="text-center mt-5 pt-3 pb-3  mx-auto memo" variant="contained" color="secondary">ライフ</Button>
                        <Button className="text-center mt-5 pt-3 pb-3  mx-auto memo" variant="contained" color="secondary">イオン </Button>
                        <Button className="text-center mt-5 pt-3 pb-3  mx-auto memo" variant="contained" color="secondary">田中さんとの共有リスト </Button>
                        <Button className="float-left mt-5" variant="contained" color="primary">共有する</Button>
                        <Button className="float-right mt-5" variant="contained" color="primary"><Link to="/list">リスト作成</Link></Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;
