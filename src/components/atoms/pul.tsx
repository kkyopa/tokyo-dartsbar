import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import axios from "axios";
import BookSearch from "../molecules/BookSearch";
import BarSearch from "../molecules/BarSearch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

interface TodoProps {
  items: { id: string; text: string }[];
}

const cours = Array();
const tokyo = [
  "足立区",
  "荒川区",
  "板橋区",
  "江戸川区",
  "大田区",
  "葛飾区",
  "北区",
  "江東区",
  "品川区",
  "渋谷区",
  "新宿区",
  "杉並区",
  "墨田区",
  "世田谷",
  "台東区",
  "中央区",
  "千代田",
  "豊島区",
  "中野区",
  "練馬区",
  "文京区",
  "港区",
  "目黒区",
];

for (var i = 0; i < tokyo.length; i++) {
  cours.push(<MenuItem value={i}>{tokyo[i]}</MenuItem>);
}

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  interface ISUB {
    content: string;
    title: string;
  }

  interface hits extends Array<ISUB> {}
  const initData: hits = [];
  const [data, setData] = useState(initData);

  const server = `http://localhost:8000/users`;

  const [posts, setPosts] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(server);
      console.log(response.data);
    };
    getUser();
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-autowidth-label">23区</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>選択してください</em>
          </MenuItem>
          {cours}
        </Select>
        <div className={classes.root}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setPosts(posts + 1)}
          >
            {tokyo[age]}&nbsp; 検索
          </Button>
        </div>
        <p>You clicked {posts} times</p>
        <BookSearch />
        <BarSearch />
        <ul>
          {props.items.map((list) => (
            <li>{list.text}</li>
          ))}
        </ul>
        {/* <FormHelperText></FormHelperText> */}
      </FormControl>
    </div>
  );
}
