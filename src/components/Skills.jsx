import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

const Skills = props => {
  return (
    <Grid>
      <Cell col={12}>
        <div style={{ disply: "flex" }}>
          {props.skill}
          <ProgressBar
            style={{ margin: "auto", width: "75%" }}
            progress={props.progress}
          />
        </div>
      </Cell>
    </Grid>
  );
};

export default Skills;
