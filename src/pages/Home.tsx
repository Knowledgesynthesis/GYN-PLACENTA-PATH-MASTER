import ModuleCard from '@/components/ModuleCard';
import {
  Microscope,
  Activity,
  Layers,
  CircleDot,
  Baby,
  Heart,
  Beaker,
  Dna,
  AlertTriangle,
  FolderOpen,
  ClipboardCheck,
} from 'lucide-react';

const Home = () => {
  const modules = [
    {
      title: 'Cervical Pathology',
      description: 'Squamous & glandular lesions, LSIL/HSIL, AIS, and IHC patterns',
      icon: Microscope,
      path: '/cervix',
      color: 'text-blue-500',
    },
    {
      title: 'Endometrium',
      description: 'Hyperplasia, EIN, endometrioid/serous carcinoma, cycling endometrium',
      icon: Layers,
      path: '/endometrium',
      color: 'text-purple-500',
    },
    {
      title: 'Ovarian Pathology',
      description: 'Epithelial, germ cell, and sex cord-stromal tumors',
      icon: CircleDot,
      path: '/ovary',
      color: 'text-pink-500',
    },
    {
      title: 'Vulva & Vagina',
      description: 'Squamous dysplasia, HPV-associated lesions, and Paget disease',
      icon: Activity,
      path: '/vulva-vagina',
      color: 'text-orange-500',
    },
    {
      title: 'Gestational Trophoblastic Disease',
      description: 'Complete/partial moles, choriocarcinoma, PSTT, and ETT',
      icon: Baby,
      path: '/gtd',
      color: 'text-green-500',
    },
    {
      title: 'Placental Pathology',
      description: 'MVM, FVM, infections, villitis, and implantation disorders',
      icon: Heart,
      path: '/placenta',
      color: 'text-red-500',
    },
    {
      title: 'IHC Frameworks',
      description: 'p16, Ki-67, ER/PR, p53, WT1, PAX8, and hCG patterns',
      icon: Beaker,
      path: '/ihc',
      color: 'text-cyan-500',
    },
    {
      title: 'Molecular Concepts',
      description: 'MMR, p53, POLE, KRAS, FOXL2 patterns (conceptual)',
      icon: Dna,
      path: '/molecular',
      color: 'text-indigo-500',
    },
    {
      title: 'Pitfalls & Mimics',
      description: 'Common diagnostic challenges and how to avoid them',
      icon: AlertTriangle,
      path: '/pitfalls',
      color: 'text-yellow-500',
    },
    {
      title: 'Integrated Cases',
      description: 'Synthetic case bank with morphology, IHC, and molecular patterns',
      icon: FolderOpen,
      path: '/cases',
      color: 'text-teal-500',
    },
    {
      title: 'Assessment',
      description: 'Test your knowledge with session-based quizzes',
      icon: ClipboardCheck,
      path: '/assessment',
      color: 'text-violet-500',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">GYN & Placenta Path Master</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Pattern-based education for gynecologic and placental pathology. Designed for pathology
          residents and fellows.
        </p>
        <div className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-md text-sm font-medium">
          Educational only. Not for diagnosis, patient care, or clinical decision-making.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <ModuleCard key={module.path} {...module} />
        ))}
      </div>
    </div>
  );
};

export default Home;
