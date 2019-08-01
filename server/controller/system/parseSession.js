var ParseSession = function(req, res) {
  if(req.session === undefined && req.session.user_id === undefined){
    res.send({
      code: 403,
      className: 'nWarning',
      message: 'У вас нет доступа к данным действиям!'
    });
  }
  return (req.session !== undefined && req.session.user_id !== undefined)
}

module.exports = ParseSession;
