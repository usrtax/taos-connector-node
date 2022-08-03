var TDengineConnection = require('./nodetaos/connection.js')
const TDengineConstant = require('./nodetaos/constants.js')
const TaosMultiBindArr = require('./nodetaos/taosMultiBindArr')
const TMQConsumer = require('./nodetaos/tmqConsumer')

module.exports = {
  connect: function (connection = {}) {
    return new TDengineConnection(connection);
  },
  SCHEMALESS_PROTOCOL: TDengineConstant.SCHEMALESS_PROTOCOL,
  SCHEMALESS_PRECISION: TDengineConstant.SCHEMALESS_PRECISION,
  TaosMultiBindArr,

  consumer:function (config = {}){
    return new TMQConsumer(config);
  }
}