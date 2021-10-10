import React from "react";
import { Mutation } from "react-apollo";
import { GET_USER_HOUSES } from "../../queryComponents/Houses";
import gql from "graphql-tag";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const DELETE_HOUSE = gql`
  mutation DELETE_HOUSE($id: ID!) {
    deleteHouse(id: $id) {
      id
      house_heading
    }
  }
`;

class DeleteHouse extends React.Component {
  // update = (cache, payload) => {
  //   // manually update the cache on the client, so it matches the server
  //   // 1. Read the cache for the items we want
  //   const data = cache.readQuery({ query: GET_USER_HOUSES });
  //   // console.log(data, payload);
  //   // 2. Filter the deleted itemout of the page
  //   // data.items = data.items.filter(
  //   //   item => item.id !== payload.data.deleteItem.id
  //   // );
  //   // 3. Put the items back!
  //   cache.writeQuery({ query: GET_USER_HOUSES, data });
  // };
  render() {
    return (
      <Mutation
        mutation={DELETE_HOUSE}
        variables={{ id: this.props.id }}
        // update={this.update}
        refetchQueries={[{ query: GET_USER_HOUSES }]}
      >
        {(deleteHouse, { error }) => (
          <IconButton
            style={{ padding: 5 }}
            onClick={() => {
              if (confirm("Are you sure you want to delete this house?")) {
                deleteHouse()
                  .then(res => {
                    this.props.onClose();
                  })
                  .catch(err => {
                    alert(err.message);
                  });
              }
            }}
          >
            <DeleteIcon style={{ fontSize: 17 }} />
          </IconButton>
        )}
      </Mutation>
    );
  }
}

export default DeleteHouse;
