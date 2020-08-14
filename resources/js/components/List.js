import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core';
// import '../../../public/css/list.css';

class List extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mt-5">リストのタイトル</h2>

                        <Button className="mt-5 ml-3" variant="contained"><Link to="/">戻る</Link></Button>

                        <div className="text-center">
                            <h5 className="mt-5">野菜リスト</h5>
                            <TextField className="mt-3" /><Button className="mt-3 ml-3" variant="contained" color="primary">追加</Button>
                            <hr />
                            <TextField className="mt-5" value="人参" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="ごぼう" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="キャベツ" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                        </div>

                        <div className="text-center">
                            <h5 className="mt-5">お肉リスト</h5>
                            <TextField className="mt-3" /><Button className="mt-3 ml-3" variant="contained" color="primary">追加</Button>
                            <hr />
                            <TextField className="mt-5" value="豚肉" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="牛肉" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="鶏肉" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                        </div>

                        <div className="text-center">
                            <h5 className="mt-5">お魚リスト</h5>
                            <TextField className="mt-3" /><Button className="mt-3 ml-3" variant="contained" color="primary">追加</Button>
                            <hr />
                            <TextField className="mt-5" value="あじ" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="さんま" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="きす" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                        </div>

                        <div className="text-center">
                            <h5 className="mt-5">その他リスト</h5>
                            <TextField className="mt-3" /><Button className="mt-3 ml-3" variant="contained" color="primary">追加</Button>
                            <hr />
                            <TextField className="mt-5" value="歯ブラシ" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="食器洗剤" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                            <TextField className="mt-5" value="電池" /><Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default List;
