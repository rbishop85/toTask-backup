import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($name: String!, $description: String!, $value: String!, $dueDate:String, $postDate: String) {
    addTask(name: $name, description: $description, value: $value, dueDate: $dueDate, postDate: $postDate) {
      _id
      name
      description
      value
      dueDate
      postDate
      comments {
        _id
        commentText
      }
    }
  }
`;

export const EDIT_TASK = gql`
  mutation editTask($name: String!, $description: String!, $value: Int!, $dueDate: String){
    editTask(name: $name, description: $description, value: $value, dueDate: $dueDate) {
      _id
      name
      description
      value
      dueDate
      postDate
      comments {
        _id
        commentText
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($taskId: ID!) {
    deleteTask(taskId: $taskId) {
      _id
      name
      description
      value
      dueDate
      postDate
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ASSIGN_TASK = gql`
  mutation assignTask($taskId: ID!) {
    assignTask(taskId: $taskId) {
      _id
      name
      description
      postDate
      toerId
      doerId
    }
  }
`;

export const UNASSIGN_TASK = gql`
  mutation unassignTask($taskId: ID!) {
    unassignTask(taskId: $taskId) {
      _id
      name
      description
      postDate
      toerId
      doerId
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($taskId: ID!, $commentText: String!) {
    addComment(taskId: $taskId, commentText: $commentText) {

      _id
      name
      description
      value
      dueDate
      postDate
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($taskId: ID!, $commentText: String!) {

    removeComment(taskId: $taskId, commentText: $commentText) {
      _id
      name
      description
      value
      dueDate
      postDate
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const ADD_PHOTO = gql`
  mutation updateUserPhoto($photoUrl: String!) {
    updateUserPhoto(photoUrl: $photoUrl) {
      _id
      username
      photo
    }
  }
`;
