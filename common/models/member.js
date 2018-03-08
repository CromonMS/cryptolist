'use strict';

var senderAddress = "noreply@cryptolist.co.uk";

module.exports = function(Member) {
  Member.afterRemote('create', function(context, member, next) {
    var options = {
      type: 'email',
      to: member.email,
      from: senderAddress,
      subject: 'Thank you for Registering.',
      text: '',
      html: '',
      redirect: '/verified'
    };
  });
};
