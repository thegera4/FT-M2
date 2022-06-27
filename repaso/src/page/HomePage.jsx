import { Card, PageHeader, Tag, Button } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCharacters } from "../action/charactersActions";

const { Meta } = Card;

const STATUSES = {
  Alive: {
    text: "Vivo",
    color: "blue",
  },
  Dead: {
    text: "Muerto",
    color: "red",
  },
  unknown: {
    text: "Desconocido",
    color: "grey",
  },
};

function HomePage(props) {
  useEffect(() => {
    props.getCharacters();
  }, []);
  console.log(props);
  return (
    <div>
      <PageHeader
        title="Rick and Morty API | Characters"
        extra={<Link to="/contact">Contacto</Link>}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          justifyItems: "center",
        }}
      >
        {props.characters.map((character) => (
          <Card
            key={character.id}
            hoverable={true}
            style={{ width: 300 }}
            cover={<img alt={character.name} src={character.image} />}
            actions={[
              <Button
                key="btn"
                onClick={() => props.history.push(`/character/${character.id}`)}
              >
                Saber más
              </Button>,
            ]}
          >
            <Meta
              title={
                <Link to={`/character/${character.id}`}>
                  {character.name}{" "}
                  <Tag color={STATUSES[character.status].color}>
                    {STATUSES[character.status].text}
                  </Tag>
                </Link>
              }
            />
          </Card>
        ))}{" "}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacters: () => dispatch(fetchCharacters()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
