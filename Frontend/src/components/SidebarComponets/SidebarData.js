import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";


const sidebarData = {
    student: [
        { title: "Dashboard", path: "/student/dashboard",icon:IoHomeOutline},
        { title: "Browse Courses", path: "/student/browse-courses",icon:HiOutlineBookOpen},
        { title: "My Courses", path: "/student/my-courses",icon:IoSearch },
        { title: "Enrollments", path: "/student/enrollments" ,icon:FaGraduationCap},
        { title: "Profile", path: "/student/profile", icon:CgProfile},
        { title: "Settings", path: "/student/setting",icon:IoSettingsOutline},
    ],

    admin: [
        { title: "Dashboard", path: "/admin/dashboard",icon:IoHomeOutline},
        { title: "Students", path: "/admin/students"},
        { title: "Faculty", path: "/admin/faculty" },
        { title: "Courses", path: "/admin/courses" },
        { title: "Admin", path: "/admin/profile" },
        { title: "Settings", path: "/admin/settings" },
    ]
};

export default sidebarData;