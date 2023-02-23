// React Redux
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as ExcursionActions from '../../actions/excursions';

// Styles
import './Excursions.css';

// Components
import {ContainerTitle} from '../../elements/ContainerTitle/ContainerTitle'
// Third Part Components
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
 
class Excursions extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.actions.ListExcursions();
    }

    render() {
        const cards = this.props.excursions.map(e => {
            return (
                <Card key={e.id} className="card-wrapper">
                    <CardMedia>
                        <img src="https://picsum.photos/250/40" alt="" />
                        </CardMedia>
                        <CardTitle title={e.name} subtitle="Card subtitle" />
                    <CardText>
                       {e.description}
                    </CardText>
                    <CardActions className="card-actions">
                        <FlatButton label="View Details" primary={true} />
                    </CardActions>
                </Card>
            )
        })
        return (
            <div className="create-excursion-container">
                <div className="create-excursion-wrapper">
                    <ContainerTitle 
                        title="Excursions" 
                        subTitle="lotem ipsum dolor sit edum color it edsu"/>
                    {cards}
                </div>   
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        excursions: state.excursions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ExcursionActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Excursions);