export const stallCategories = ['All', 'Food', 'Household Goods', 'Clothing', 'Electronics', 'Services'];

export const stalls = [
  {
    name: 'Arewa Fresh Produce Hub',
    category: 'Food',
    location: 'Block A · Aisle 2',
    status: 'Open',
    contact: '+234 801 234 9911'
  },
  {
    name: 'Sahel Grain & Spice',
    category: 'Food',
    location: 'Block B · Row 4',
    status: 'Open',
    contact: '+234 809 775 1104'
  },
  {
    name: 'Damaturu Fashion Court',
    category: 'Clothing',
    location: 'Block C · Upper Deck',
    status: 'Closed',
    contact: '+234 703 553 8802'
  },
  {
    name: 'Gaidam Tech Corner',
    category: 'Electronics',
    location: 'Block D · Row 1',
    status: 'Open',
    contact: '+234 816 450 7744'
  },
  {
    name: 'Yobe Home Essentials',
    category: 'Household Goods',
    location: 'Block A · Aisle 6',
    status: 'Open',
    contact: '+234 807 338 2210'
  },
  {
    name: 'Northern Services Desk',
    category: 'Services',
    location: 'Block E · Admin Wing',
    status: 'Open',
    contact: '+234 902 119 0031'
  }
];

export const vendors = [
  {
    name: 'Hadiza Abubakar',
    stall: 'Stall C12',
    category: 'Textiles & Fashion',
    rating: 4.8,
    reviews: 128,
    products: ['Ankara fabrics', 'Ready-to-wear', 'Tailoring services']
  },
  {
    name: 'Musa Goni',
    stall: 'Stall A05',
    category: 'Fresh Produce',
    rating: 4.6,
    reviews: 89,
    products: ['Vegetables', 'Dry spices', 'Bulk grains']
  },
  {
    name: 'Zainab Ibrahim',
    stall: 'Stall D03',
    category: 'Electronics',
    rating: 4.7,
    reviews: 64,
    products: ['Mobile devices', 'Accessories', 'Repairs']
  }
];

export const announcements = [
  {
    title: 'New Trading Hours Announced',
    date: 'Sept 18, 2024',
    description: 'Market hours are now 7:00 AM – 8:00 PM daily to support extended trading.'
  },
  {
    title: 'Annual Damaturu Trade Fair',
    date: 'Oct 02, 2024',
    description: 'Showcase your products to regional investors and partners during the annual fair.'
  },
  {
    title: 'Safety & Sanitation Update',
    date: 'Oct 10, 2024',
    description: 'Weekly sanitation drills and security patrols will take place every Friday.'
  }
];

export const dashboardStats = [
  { label: 'Total Stalls', value: '420' },
  { label: 'Active Vendors', value: '318' },
  { label: 'Open Tickets', value: '27' },
  { label: 'Announcements', value: '12' }
];

export const reports = [
  { issue: 'Sanitation: Block B', status: 'Resolved' },
  { issue: 'Security lighting - Row 7', status: 'Pending' },
  { issue: 'Water supply - Block A', status: 'In Progress' }
];
