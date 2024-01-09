import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ApprovalIcon from '@mui/icons-material/Approval';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { deleteCookie } from 'cookies-next';

const logout = () => {
  setTimeout(() => {
    deleteCookie('logged');
  }, 0);
}

export const allFilesData = [
  { fileName: 'Profile', icon: <AccountCircleIcon />, path: '/dashboard/userProfile' },

  { fileName: 'Add User', icon: <PersonAddAltIcon />, path: '/dashboard/AddUser' },

  { fileName: 'Apply Leaves', icon: <ApprovalIcon />, path: '/dashboard/ApplyLeave' },

  { fileName: 'Calendar', icon: <CalendarMonthIcon />, path: '/dashboard/Calendar' },

  { fileName: 'Documents', icon: <AccessibilityNewIcon />, path: '/dashboard/Documents' },

  { fileName: 'Monthly Task', icon: <AssignmentLateIcon />, path: '/dashboard/monthlyTask' },

  { fileName: 'Personal Notes', icon: <DescriptionIcon />, path: '/dashboard/personalNotes' },

  { fileName: 'Salary details', icon: <AttachMoneyIcon />, path: '/dashboard/salary' },

  { fileName: 'Updates', icon: <AnnouncementIcon />, path: '/dashboard/updates' },
  
  { fileName: 'Completed Task', icon: <AddTaskIcon />, path: '/dashboard/CompletedTask' },

  { fileName: 'LogOut', icon: <PowerSettingsNewIcon onClick={logout} />, path: '/' },
]