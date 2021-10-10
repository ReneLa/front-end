import gql from "graphql-tag";
import React from "react";
import { Mutation } from "react-apollo";
import { GET_USER_PARENT_HOUSES } from "../../queryComponents/ParentHouses";

const DELETE_PARENT_HOUSE = gql`
  mutation DELETE_PARENT_HOUSE($id: ID!) {
    deleteParentHouse(id: $id) {
      id
      building_name
      image
    }
  }
`;

class DeleteParentHouse extends React.Component {
  //   update = (cache, payload) => {
  //     // manually update the cache on the client, so it matches the server
  //     // 1. Read the cache for the items we want
  //     const data = cache.readQuery({ query: GET_USER_PARENT_HOUSES });
  //     // console.log(data, payload);
  //     // 2. Filter the deleted itemout of the page
  //     // data.items = data.items.filter(
  //     //   item => item.id !== payload.data.deleteItem.id
  //     // );
  //     // 3. Put the items back!
  //     cache.writeQuery({ query: GET_USER_PARENT_HOUSES, data });
  //   };
  render() {
    return (
      <Mutation
        mutation={DELETE_PARENT_HOUSE}
        variables={{ id: this.props.id }}
        refetchQueries={[{ query: GET_USER_PARENT_HOUSES }]}
        // update={this.update}
      >
        {(deleteParentHouse, { error }) => (
          <button
            style={{ color: "red" }}
            onClick={() => {
              if (confirm("Are you sure you want to delete this building?")) {
                deleteParentHouse().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            delete
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteParentHouse;
