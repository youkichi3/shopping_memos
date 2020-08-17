import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import _ from 'lodash';
import { readVegetableLists, readMealLists, readFishLists, readOtherLists } from '../actions';
// import '../../../public/css/list.css';

class List extends Component {
    componentDidMount() {
        this.props.readVegetableLists();
        this.props.readMealLists();
        this.props.readFishLists();
        this.props.readOtherLists();
    }

    renderVegetableLists() {
        return _.map(this.props.vegetableLists, vegetableList => (
            <React.Fragment key={vegetableList.id}>
                <TextField className="mt-5" value={vegetableList.name} /> <Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
            </React.Fragment>
        ))
    }

    renderMealLists() {
        return _.map(this.props.mealLists, mealList => (
            <React.Fragment key={mealList.id}>
                <TextField className="mt-5" value={mealList.name} /> <Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
            </React.Fragment>
        ))
    }

    renderFishLists() {
        return _.map(this.props.fishLists, fishList => (
            <React.Fragment key={fishList.id}>
                <TextField className="mt-5" value={fishList.name} /> <Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
            </React.Fragment>
        ))
    }

    renderOtherLists() {
        return _.map(this.props.otherLists, otherList => (
            <React.Fragment key={otherList.id}>
                <TextField className="mt-5" value={otherList.name} /> <Button className="mt-5 ml-3" variant="contained" color="secondary">削除</Button>
            </React.Fragment>
        ))
    }

    render() {
        const props = this.props;
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
                            {this.renderVegetableLists()}
                        </div>

                        <div className="text-center">
                            <h5 className="mt-5">お肉リスト</h5>
                            <TextField className="mt-3" /><Button className="mt-3 ml-3" variant="contained" color="primary">追加</Button>
                            <hr />
                            {this.renderMealLists()}
                        </div>

                        <div className="text-center">
                            <h5 className="mt-5">お魚リスト</h5>
                            <TextField className="mt-3" /><Button className="mt-3 ml-3" variant="contained" color="primary">追加</Button>
                            <hr />
                            {this.renderFishLists()}
                        </div>

                        <div className="text-center">
                            <h5 className="mt-5">その他リスト</h5>
                            <TextField className="mt-3" /><Button className="mt-3 ml-3" variant="contained" color="primary">追加</Button>
                            <hr />
                            {this.renderOtherLists()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    vegetableLists: state.vegetableLists,
    mealLists: state.mealLists,
    fishLists: state.fishLists,
    otherLists: state.otherLists,
});

const mapDispatchToProps = ({
    readVegetableLists,
    readMealLists,
    readFishLists,
    readOtherLists,
});

export default connect(mapStateToProps, mapDispatchToProps)(List)
