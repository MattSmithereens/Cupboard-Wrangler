import React from 'react';

const EditItem = (props) => {
  return (
    <div>
      Editing item {props.match.params.id}
    </div>
  );
};

export default EditItem