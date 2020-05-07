var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInt = require('graphql').GraphQLInt;
var GraphQLDate = require('graphql-date');
var LogoModel = require('../models/Logo')
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;

var imageName = new GraphQLObjectType({
    name: 'ImageName',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            
            url: {
                type: GraphQLString
            },
            height:
            {
                type:GraphQLInt
            },
            width:
            {
                type:GraphQLInt
            },
            xpos:
            {
                type:GraphQLInt
            },
            ypos:
            {
                type:GraphQLInt
            }
           
            
        }
    }
});
var ImageType = new GraphQLInputObjectType({
    name: 'ImageText',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            
            url: {
                type: GraphQLString
            },
            height:
            {
                type:GraphQLInt
            },
            width:
            {
                type:GraphQLInt
            },
            xpos:
            {
                type:GraphQLInt
            },
            ypos:
            {
                type:GraphQLInt
            }
           
           
        }
    }
});
var textType = new GraphQLInputObjectType({
    name: 'LogoText',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            
            title: {
                type: GraphQLString
            },
            color: {
                type: GraphQLString
            },
            fontSize: {
                type: GraphQLInt
            },

            xpos:
            {
                type: GraphQLInt
            },

            ypos:
            {
                type:GraphQLInt
            },

           
            lastUpdate: {
                type: GraphQLDate
            }
        }
    }
});
var textName = new GraphQLObjectType({
    name: 'LogoName',
    fields: function () {
        return {
            id: {
                type: GraphQLInt
            },
            
            title: {
                type: GraphQLString
            },
            color: {
                type: GraphQLString
            },
            fontSize: {
                type: GraphQLInt
            },
            xpos:
            {
                type: GraphQLInt
            },

            ypos:
            {
                type:GraphQLInt
            },
           
            lastUpdate: {
                type: GraphQLDate
            }
        }
    }
});
var logoType = new GraphQLObjectType({
    name: 'logo',
    fields: function () {
        return {
            _id: {
                type: GraphQLString
            },
            texts:
            {
                type:GraphQLList(textName)
            },
            images:
            {
                type:GraphQLList(imageName)

            },
           
            text: {
                type: GraphQLString
            },
            color: {
                type: GraphQLString
            },
            fontSize: {
                type: GraphQLInt
            },
            backgroundColor: {
                type: GraphQLString
            },
            borderRadius: {
                type: GraphQLInt
            },
            borderWidth: {
                type: GraphQLInt
            },
            borderColor: {
                type: GraphQLString
            },
            padding: {
                type: GraphQLInt
            },
            margin: {
                type: GraphQLInt
            },
            height: {
                type: GraphQLInt
            },
            width: {
                type: GraphQLInt
            },
            lastUpdate: {
                type: GraphQLDate
            }
        }
    }
});

var queryType = new GraphQLObjectType({
    name: 'Query',
    fields: function () {
        return {
            logos: {
                type: new GraphQLList(logoType),
                resolve: function () {
                    const logos = LogoModel.find().exec()
                    if (!logos) {
                        throw new Error('Error')
                    }
                    return logos
                }
            },
            logo: {
                type: logoType,
                args: {
                    id: {
                        name: '_id',
                        type: GraphQLString
                    }
                },
                resolve: function (root, params) {
                    const logoDetails = LogoModel.findById(params.id).exec()
                    if (!logoDetails) {
                        throw new Error('Error')
                    }
                    return logoDetails
                }
            }
        }
    }
});

var mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: function () {
        return {
            addLogo: {
                type: logoType,
                args: {
                    text: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    texts:
                    {
                        type: new GraphQLNonNull(GraphQLList(textType))
                    },
                    images:
                    {
                        type: new GraphQLNonNull(GraphQLList( ImageType))
                    },
                   
                        
                    color: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    fontSize: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    backgroundColor: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    borderRadius: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    borderWidth: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    borderColor: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    padding: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    margin: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    height: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    width: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }

                },
                resolve: function (root, params) {
                    const logoModel = new LogoModel(params);
                    const newLogo = logoModel.save();
                    if (!newLogo) {
                        throw new Error('Error');
                    }
                    return newLogo
                }
            },
            updateLogo: {
                type: logoType,
                args: {
                    id: {
                        name: 'id',
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    text: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    texts:{
                        type: new GraphQLNonNull(GraphQLList(textType))
                    },
                    images:{
                        type: new GraphQLNonNull(GraphQLList(ImageType))
                    },
                   
                    color: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    fontSize: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    backgroundColor: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    borderRadius: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    borderColor: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    borderWidth: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    padding: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    margin: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    height: {
                        type: new GraphQLNonNull(GraphQLInt)
                    },
                    width: {
                        type: new GraphQLNonNull(GraphQLInt)
                    }
                },
                resolve(root, params) {
                    return LogoModel.findByIdAndUpdate(params.id, { texts: params.texts,images:params.images,text: params.text, color: params.color, fontSize: params.fontSize,backgroundColor: params.backgroundColor,borderRadius: params.borderRadius,borderWidth: params.borderWidth,borderColor: params.borderColor,padding: params.padding,margin: params.margin,height: params.height,width: params.width, lastUpdate: new Date() }, function (err) {
                        if (err) return next(err);
                    });
                }
            },
            removeLogo: {
                type: logoType,
                args: {
                    id: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve(root, params) {
                    const remLogo = LogoModel.findByIdAndRemove(params.id).exec();
                    if (!remLogo) {
                        throw new Error('Error')
                    }
                    return remLogo;
                }
            },
            
        }
    }
});

module.exports = new GraphQLSchema({ query: queryType, mutation: mutation });