import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleMenu from "../atoms/pul";
import ContainedButtons from "../atoms/buttom";


const Search: React.FC = () => {
  const tod = [{id: 'タスク１', text: 'ご飯を作る'}];
return (
  <React.Fragment>
  <SimpleMenu
  items={tod}
  />
  <ContainedButtons />
  </React.Fragment>
)

}

export default Search;

