const adminRoutes = require("./staff/adminRoute");
const academicYearRoutes = require("./academics/academicYearRoute");
const academicTermRoutes = require("./academics/academicTermRoute");
const classLevelRoutes = require("./academics/classLevelRoute");
const programRoutes = require("./academics/programRoute");
const subjectRoutes = require("./academics/subjectRoute");
const yearGroupRoutes = require("./academics/yearGroupRoute");

const path = "/api/v1";

exports.routes = (app) => {
  app.use(`${path}/staff/admin`, adminRoutes);
  app.use(`${path}/academic/academic-year`, academicYearRoutes);
  app.use(`${path}/academic/academic-term`, academicTermRoutes);
  app.use(`${path}/academic/class-level`, classLevelRoutes);
  app.use(`${path}/academic/program`, programRoutes);
  app.use(`${path}/academic/subject`, subjectRoutes);
  app.use(`${path}/academic/year-group`, yearGroupRoutes);
};
