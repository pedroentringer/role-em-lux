"use strict";

const Kue = use("Kue");
const Job = use("App/Jobs/NewUserMail");

const UserHook = (exports = module.exports = {});

UserHook.sendNewUserEmail = async taskInstance => {
  const { username, password, email } = taskInstance;

  Kue.dispatch(Job.key, { username, password, email }, { attemps: 2 });
};
