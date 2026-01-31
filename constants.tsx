
import React from 'react';
import { UserRole, StatItem, FeatureItem, ServiceItem, ProductItem } from './types';

export const ROLES = [
  {
    id: UserRole.AGENT,
    title: 'Agent',
    description: 'Empowering sales and logistics coordination.',
    icon: 'fa-user-tie',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: UserRole.TRANSPORTER,
    title: 'Transporter',
    description: 'Streamlining large scale fleet operations.',
    icon: 'fa-truck-fast',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: UserRole.TRUCK_OWNER,
    title: 'Truck Owner',
    description: 'Maximizing vehicle utility and profits.',
    icon: 'fa-truck-moving',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop'
  }
];

export const STATS: StatItem[] = [
  { icon: 'fa-calendar-check', number: '20+', label: 'Years of Expertise', color: '#3b82f6' },
  { icon: 'fa-users', number: '500+', label: 'Happy Clients', color: '#f97316' },
  { icon: 'fa-truck', number: '10K+', label: 'Vehicles Managed', color: '#a855f7' },
  { icon: 'fa-chart-line', number: '99%', label: 'Client Satisfaction', color: '#10b981' }
];

export const FEATURES: FeatureItem[] = [
  { icon: 'fa-brain', title: 'Intelligent Automation', description: 'Consulting through intelligent Logistics ERP automation that streamlines every aspect of business.', color: 'blue' },
  { icon: 'fa-gavel', title: 'Bidding & Freight', description: 'Advanced software to optimize pricing with real-time market intelligence and competitive analysis.', color: 'orange' },
  { icon: 'fa-network-wired', title: 'Supply Chain Advisory', description: 'Strategic consulting for improved efficiency and scalability across your network.', color: 'purple' },
  { icon: 'fa-users-cog', title: '20+ Years Expertise', description: 'Proven domain leadership with decades of experience in logistics operations.', color: 'green' },
  { icon: 'fa-puzzle-piece', title: 'Seamless Integration', description: 'Perfect blend of technology and domain knowledge for industry-specific ERP.', color: 'indigo' },
  { icon: 'fa-chart-bar', title: 'Data-Driven Insights', description: 'Real-time analytics, route optimization, and performance tracking powered by AI.', color: 'rose' }
];

export const SERVICES: ServiceItem[] = [
  {
    icon: 'fa-handshake',
    title: 'Sales Consultation',
    color: 'blue',
    items: ['Channel acquisition strategy', 'CRM optimization', 'Sales process automation', 'Rate management strategy']
  },
  {
    icon: 'fa-project-diagram',
    title: 'Operations Design',
    color: 'orange',
    items: ['Hub-and-spoke optimization', 'Route & fleet planning', 'Capacity forecasting', 'SOP design & integration']
  },
  {
    icon: 'fa-cogs',
    title: 'ERP Process Automation',
    color: 'purple',
    items: ['Logistics ERP setup', 'MMS implementation', 'TMS automation', 'Workflow mapping']
  },
  {
    icon: 'fa-chart-pie',
    title: 'Strategy & Analytics',
    color: 'green',
    items: ['Operational dashboards', 'KPI & SLA tracking', 'Cost optimization modeling', 'Profitability analysis']
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    icon: 'fa-laptop-code',
    title: 'Loadbazzar ERP',
    description: 'Fully cloud-based logistics ERP system, developed in-house and fully customizable.',
    color: 'blue',
    features: ['Integrated Sales & Ops', 'API-ready scaling', 'Real-time data flow', '99.9% uptime']
  },
  {
    icon: 'fa-route',
    title: 'RouteOpt',
    description: 'Advanced route and delivery optimization tool that helps reduce operational costs.',
    color: 'orange',
    features: ['Real-time ETA', 'Cost analytics', 'Multi-stop optimization', 'Time-sensitive logistics']
  },
  {
    icon: 'fa-map-marked-alt',
    title: 'LoadTrack',
    description: 'GPS and telematics-based tracking module for enhanced fleet visibility.',
    color: 'purple',
    features: ['Real-time vehicle tracking', 'Driver behavior monitoring', 'Route adherence', 'Fuel analytics']
  }
];
