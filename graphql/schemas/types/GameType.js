const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList } = graphql;

const GameType = new GraphQLObjectType({
  name: "Game",
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    thumbnail_id: { type: GraphQLString },
    thumbnail_name: { type: GraphQLString },
    status: { type: GraphQLBoolean },
    short_description: { type: GraphQLString },
    description: { type: GraphQLString },
    game_url: { type: GraphQLString },
    genre: { type: GraphQLString },
    platform: { type: GraphQLString },
    publisher: { type: GraphQLString },
    developer: { type: GraphQLString },
    release_date: { type: GraphQLString },
    os: { type: GraphQLString },
    processor: { type: GraphQLString },
    memory: { type: GraphQLString },
    graphics: { type: GraphQLString },
    storage: { type: GraphQLString },
    // screenshots: {type: GraphQLList()}
  }),
});

module.exports = GameType;
