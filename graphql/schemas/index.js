const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} = graphql;
const GameType = require("./types/GameType");
const userData = require("../../MOCK_DATA.json");
const gameModel = require("../../mongodb/models/Game");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getGames: {
      type: new GraphQLList(GameType),
      resolve: async (parent, args) => {
        return await gameModel.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createGame: {
      type: GameType,
      args: {
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
      },
      resolve: async (parent, args) => {
        console.log("ARGSSS");
        console.log(args);

        const game = {
          title: args.title,
          thumbnail: {
            thumbnail_id: args.thumbnail_id,
            thumbnail_name: args.thumbnail_name,
          },
          status: args.status,
          short_description: args.short_description,
          description: args.description,
          game_url: args.game_url,
          genre: args.genre,
          platform: args.platform,
          publisher: args.publisher,
          developer: args.developer,
          release_date: new Date(args.release_date).toLocaleDateString("en-US"),
          minimum_system_requirements: {
            os: args.os,
            processor: args.processor,
            memory: args.memory,
            graphics: args.graphics,
            storage: args.storage,
          },
        };

        const response = await gameModel.create(game);
        return response;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
