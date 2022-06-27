import { PageHeader } from "antd";
import axios from "axios";
import React, { useEffect } from "react";

class CharacterDetailPage extends React.Component {
  // const [character, setCharacter] = React.useState(undefined);
  // useEffect(() => {
  //   axios
  //     .get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
  //     .then((result) => {
  //       setCharacter(result.data);
  //     })
  //     .catch(() => {
  //       setCharacter(null);
  //     });
  // }, [props.match.params.id]);

  constructor(props) {
    super(props);

    this.state = {
      character: undefined,
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${this.props.match.params.id}`
      )
      .then((result) => {
        this.setState({ character: result.data });
      })
      .catch(() => {
        this.setState({ character: null });
      });
  }

  render() {
    return (
      <div>
        <PageHeader
          title={
            this.state.character === undefined
              ? "Cargando..."
              : this.state.character === null
              ? "Character no encontrado..."
              : this.state.character.name
          }
          onBack={() => this.props.history.goBack()}
        />
        {this.state.character?.id && (
          <img src={this.state.character.image} alt="" />
        )}
      </div>
    );
  }
}

export default CharacterDetailPage;
