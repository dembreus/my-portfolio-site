import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Photo from "../images/profile-pic0.jpg";

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Dillon Embreus</h2>
          <img
            src={Photo}
            alt="avatar"
            style={{ height: "auto", width: "100%", borderRadius: "5%" }}
          />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            lorem ipsum
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (385) 444-6272
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-fax" aria-hidden="true" />
                  (385) 444-6272
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  dillon.embreus@gmail.com
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Anton" }}
                >
                  <i className="fa fa-skype" aria-hidden="true" />
                  mySkypeID
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
