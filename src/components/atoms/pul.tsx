import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

interface TodoProps {
  items: { id: string; text: string }[];
}

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

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
          <MenuItem value={"足立区"}>足立区</MenuItem>
          <MenuItem value={"荒川区"}>荒川区</MenuItem>
          <MenuItem value={"板橋区"}>板橋区</MenuItem>
          <MenuItem value={"江戸川区"}>江戸川区</MenuItem>
          <MenuItem value={"大田区"}>大田区</MenuItem>
          <MenuItem value={"葛飾区"}>葛飾区</MenuItem>
          <MenuItem value={"北区"}>北区</MenuItem>
          <MenuItem value={"江東区"}>江東区</MenuItem>
          <MenuItem value={"品川区"}>品川区</MenuItem>
          <MenuItem value={"渋谷区"}>渋谷区</MenuItem>
          <MenuItem value={"新宿区"}>新宿区</MenuItem>
          <MenuItem value={"杉並区"}>杉並区</MenuItem>
          <MenuItem value={"墨田区"}>墨田区</MenuItem>
          <MenuItem value={"世田谷区"}>世田谷区</MenuItem>
          <MenuItem value={"台東区"}>台東区</MenuItem>
          <MenuItem value={"中央区"}>中央区</MenuItem>
          <MenuItem value={"千代田区"}>千代田区</MenuItem>
          <MenuItem value={"豊島区"}>豊島区</MenuItem>
          <MenuItem value={"中野区"}>中野区</MenuItem>
          <MenuItem value={"練馬区"}>練馬区</MenuItem>
          <MenuItem value={"文京区"}>文京区</MenuItem>
          <MenuItem value={"港区"}>港区</MenuItem>
          <MenuItem value={"目黒区"}>目黒区</MenuItem>
        </Select>
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
