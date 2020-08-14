import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import '../../../public/css/top.css';

class Top extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mt-5">メモ集</h1>
                        <a href=""><p className="text-center mt-5 pt-3 pb-3 bg-danger mx-auto memo">ライフ </p></a>
                        <a href=""><p className="text-center mt-5 pt-3 pb-3 bg-danger mx-auto memo">イオン </p></a>
                        <a href=""><p className="text-center mt-5 pt-3 pb-3 bg-danger mx-auto memo">田中さんとの共有リスト </p></a>
                        <Button className="float-left mt-3" variant="contained">共有する</Button>
                        <Button className="float-right mt-3" variant="contained">リスト作成</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;