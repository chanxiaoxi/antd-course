import React, { Component } from "react";
import { Card, Button } from "antd";
import { connect } from "dva";

const namespace = "puzzlecards";

const mapStateToProps = state => {
  const cardList = state[namespace].data;
  return {
    cardList
  };
};

const mapDispatchToProps = dispatch => {
  // return {
  //   onClickAdd: (newCard) => {
  //     const action = {
  //       type: `${namespace}/addNewCard`,
  //       payload: newCard
  //     };
  //     dispatch(action);
  //   }
  // }
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`
      });
    }
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class PuzzleCardsPage extends Component {
  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    return (
      <div>
        {this.props.cardList.map(card => {
          return (
            <Card key={card.id}>
              <div>Q: {card.setup}</div>
              <div>
                <strong>A: {card.punchline}</strong>
              </div>
            </Card>
          );
        })}
        {/* <div style={{ textAlign: "left", padding: "25px 0" }}>
          <Button
            onClick={() =>
              this.props.onClickAdd({
                setup:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                punchline: "here we use dva"
              })
            }
          >
            {" "}
            添加卡片{" "}
          </Button>
        </div> */}
      </div>
    );
  }
}
