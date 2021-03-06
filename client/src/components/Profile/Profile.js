import React from 'react';
import Events from './Events';
import { Container, Header, Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getAllEvents } from '../../actions/apiActions';
import './styles.css';

class Profile extends React.Component {
  state = { open: false };

  show = () => {
    console.log(this.state);
  };

  handleCancel = () => this.setState({ open: false });
  handleConfirm = id => {
    this.setState({ open: false });
    console.log('delete');
  };

  componentDidMount() {
    this.props.getAllEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <Container as="section">
        <Header as="h1">Profile</Header>
        <Header as="h1">Events</Header>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={2}>Date</Table.HeaderCell>
              <Table.HeaderCell width={2}>Category</Table.HeaderCell>
              <Table.HeaderCell>Event Title</Table.HeaderCell>
              <Table.HeaderCell collapsing />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {events.map((event, i) => (
              <Events
                key={i}
                id={event._id}
                date={event.date}
                category={event.category}
                title={event.title}
                onClick={this.show}
              />
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  events: state.api.events
});

export default connect(mapStateToProps, { getAllEvents })(Profile);
