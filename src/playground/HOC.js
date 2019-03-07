import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';

const Info = (props) => (
  <div>
    <h1>info</h1>
    <p>the info is: {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAuthenticated && <p>This is private info!</p>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
          <p>You need to log in</p>
        )}
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='this is the info prop' />, document.getElementById('root'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='this is the info prop' />, document.getElementById('root'));
