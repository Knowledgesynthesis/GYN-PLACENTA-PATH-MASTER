import { Moon, Sun, Info, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useThemeStore } from '@/store/themeStore';

const Settings = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your app preferences and view important information
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            Appearance
          </CardTitle>
          <CardDescription>Choose your preferred color scheme</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme Mode</p>
              <p className="text-sm text-muted-foreground">
                Currently using {theme === 'dark' ? 'Dark' : 'Light'} mode
              </p>
            </div>
            <Button onClick={toggleTheme} variant="outline">
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 mr-2" />
                  Switch to Light
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 mr-2" />
                  Switch to Dark
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="w-5 h-5" />
            About the App
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">GYN & Placenta Path Master</h3>
            <p className="text-sm text-muted-foreground">
              A mobile-first, pattern-based educational platform for gynecologic and placental
              pathology. Designed specifically for pathology residents (PGY1-PGY4) and GYN pathology
              fellows preparing for rotations and boards.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">What You'll Learn</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Cervical squamous and glandular lesions (LSIL, HSIL, AIS)</li>
              <li>Endometrial hyperplasia vs carcinoma patterns</li>
              <li>Ovarian tumor classification (epithelial, germ cell, sex cord-stromal)</li>
              <li>Gestational trophoblastic disease (GTD)</li>
              <li>Placental pathology (MVM, FVM, infections, implantation disorders)</li>
              <li>IHC and molecular concepts for GYN pathology</li>
              <li>Common pitfalls and mimics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Icon-based visual learning (no real histology images)</li>
              <li>Pattern recognition frameworks</li>
              <li>Integrated case scenarios</li>
              <li>Session-based assessments (no score tracking)</li>
              <li>Offline-ready for learning anywhere</li>
              <li>Dark mode optimized for reduced eye strain</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle className="w-5 h-5" />
            Important Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Educational Use Only</h3>
            <p className="text-sm text-muted-foreground">
              This application is designed exclusively for educational purposes. It is NOT intended
              for:
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside mt-2">
              <li>Clinical diagnosis or patient care</li>
              <li>Treatment decisions or recommendations</li>
              <li>Replacing formal medical education or training</li>
              <li>Substitute for consultation with qualified pathologists</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Synthetic Content</h3>
            <p className="text-sm text-muted-foreground">
              All images, cases, and examples are synthetic and educational. They are conceptual
              representations designed to teach pattern recognition and diagnostic reasoning. No real
              patient data (PHI) is used.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">No Medical Advice</h3>
            <p className="text-sm text-muted-foreground">
              This app does not provide medical advice. Always consult with qualified healthcare
              professionals for medical decisions. In case of emergency, contact appropriate
              emergency services immediately.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Privacy</h3>
            <p className="text-sm text-muted-foreground">
              This application does not track, store, or transmit any user data. All learning is
              session-based only. No personal information is collected or shared.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Accuracy and Updates</h3>
            <p className="text-sm text-muted-foreground">
              While we strive for educational accuracy based on standard pathology references (WHO
              Classification, Kurman, Benirschke concepts), pathology classifications and guidelines
              evolve. Always refer to current literature and institutional protocols.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
