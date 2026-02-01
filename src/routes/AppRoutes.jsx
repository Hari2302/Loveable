import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import AdminLogin from "../pages/admin/AdminLogin";
import AdminLayout from "../pages/admin/AdminLayout";

import DashboardHome from "../pages/dashboard/DashboardHome";
import StudentHome from "../pages/student/StudentHome";
import TeacherHome from "../pages/teacher/TeacherHome";
import ClassHome from "../pages/class/ClassHome";
import AssignmentHome from "../pages/assignment/AssignmentHome";
import ExamHome from "../pages/exam/ExamHome";

import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* Protected Admin Layout */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="students" element={<StudentHome />} />
          <Route path="teachers" element={<TeacherHome />} />
          <Route path="classes" element={<ClassHome />} />
          <Route path="assignments" element={<AssignmentHome />} />
          <Route path="exams" element={<ExamHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
