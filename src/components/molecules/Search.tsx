import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleMenu from "../atoms/pul";
import ContainedButtons from "../atoms/buttom";


const Search: React.FC = () => {
  const todo = [{id: 'タスク１', text: 'ご飯を作る'}];
return (
  <React.Fragment>
  <SimpleMenu
  items={todo}
  />
  </React.Fragment>
)

}

export default Search;

