import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Molecular = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Molecular Concepts</h1>
          <p className="text-muted-foreground">Molecular patterns and classifications in GYN pathology</p>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Molecular Pathology in Gynecologic Oncology</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Molecular testing has revolutionized gynecologic pathology classification, prognosis, and treatment.
            This module covers conceptual molecular patterns - these are educational frameworks, not clinical
            diagnostic tools.
          </p>
        </CardContent>
      </Card>

      {/* Endometrial Molecular */}
      <Card>
        <CardHeader>
          <CardTitle>Endometrial Carcinoma Molecular Classification</CardTitle>
          <CardDescription>TCGA/ProMisE classification</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Overview of Four Groups</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Modern classification divides endometrial carcinomas into four molecular groups with distinct
              prognosis and treatment implications.
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">POLE Ultramutated (POLEmut)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Mutation:</strong> POLE exonuclease domain mutations</p>
              <p><strong>Frequency:</strong> ~7-12% of endometrial carcinomas</p>
              <p><strong>Histology:</strong> Often high-grade endometrioid, may have bizarre nuclei</p>
              <p><strong>Tumor infiltrating lymphocytes:</strong> Common</p>
              <p><strong>Prognosis:</strong> EXCELLENT - best outcome group</p>
              <p><strong>Testing:</strong> Requires sequencing (not IHC)</p>
              <p className="text-muted-foreground italic">
                Ultramutated phenotype, paradoxically favorable despite high-grade morphology
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">MMR Deficient / MSI-High (MMRd)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Mechanism:</strong> Mismatch repair deficiency → microsatellite instability</p>
              <p><strong>Frequency:</strong> ~25-30%</p>
              <p><strong>Causes:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • Sporadic: MLH1 promoter hypermethylation (~70%)<br />
                • Lynch syndrome: Germline MMR mutations (~30%)
              </p>
              <p><strong>IHC:</strong> Loss of MLH1/PMS2 (sporadic) or MSH2/MSH6 (Lynch)</p>
              <p><strong>Histology:</strong> Often endometrioid, may have TILs, peritumoral lymphocytes</p>
              <p><strong>Prognosis:</strong> Intermediate</p>
              <p><strong>Treatment:</strong> May benefit from checkpoint inhibitor immunotherapy</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">p53 Abnormal (p53abn)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Mutation:</strong> TP53 mutations</p>
              <p><strong>Frequency:</strong> ~10-15%</p>
              <p><strong>IHC patterns:</strong></p>
              <p className="ml-4 text-muted-foreground">
                • Overexpression: Diffuse strong nuclear ({'>'}75%)<br />
                • Null: Complete absence of staining
              </p>
              <p><strong>Histology:</strong> Serous carcinoma, high-grade endometrioid, carcinosarcoma</p>
              <p><strong>Prognosis:</strong> POOR - worst outcome group</p>
              <p><strong>Associated mutations:</strong> PPP2R1A, PIK3CA, FBXW7</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">No Specific Molecular Profile (NSMP)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Definition:</strong> No POLE mutation, MMR intact, p53 wild-type</p>
              <p><strong>Frequency:</strong> ~40-50%</p>
              <p><strong>Histology:</strong> Low-grade endometrioid, often with ER/PR expression</p>
              <p><strong>Common mutations:</strong> PTEN, PIK3CA, KRAS, ARID1A, CTNNB1</p>
              <p><strong>Prognosis:</strong> Intermediate-favorable</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Prognostic Hierarchy</h3>
            <div className="text-sm bg-muted/50 p-4 rounded-lg">
              <p className="font-semibold mb-2">Best to Worst Prognosis:</p>
              <p>1. POLE ultramutated (best)</p>
              <p>2. MMRd / NSMP (intermediate)</p>
              <p>3. p53 abnormal (worst)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Ovarian Molecular */}
      <Card>
        <CardHeader>
          <CardTitle>Ovarian Carcinoma Molecular Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">High-Grade Serous Carcinoma (HGSC)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>TP53 mutation:</strong> ~96% (defining feature)</p>
              <p><strong>BRCA1/BRCA2 mutations:</strong> ~20-25% (germline or somatic)</p>
              <p><strong>Homologous recombination deficiency (HRD):</strong> ~50%</p>
              <p><strong>Clinical:</strong> PARP inhibitor sensitivity in HRD tumors</p>
              <p className="text-muted-foreground italic">
                Fallopian tube (fimbria) is likely site of origin for many HGSC
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Low-Grade Serous Carcinoma (LGSC)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>KRAS mutations:</strong> ~35%</p>
              <p><strong>BRAF mutations:</strong> ~30%</p>
              <p><strong>NRAS mutations:</strong> ~10%</p>
              <p><strong>TP53:</strong> Usually wild-type (contrast to HGSC)</p>
              <p><strong>Pathway:</strong> MAPK pathway activation</p>
              <p className="text-muted-foreground italic">
                Slow-growing, chemoresistant, MEK inhibitors under investigation
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Clear Cell Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>ARID1A mutations:</strong> ~50% (chromatin remodeling)</p>
              <p><strong>PIK3CA mutations:</strong> ~40%</p>
              <p><strong>Association:</strong> Endometriosis</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Endometrioid Ovarian Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>ARID1A mutations:</strong> Common</p>
              <p><strong>PIK3CA, PTEN, KRAS mutations:</strong> Frequent</p>
              <p><strong>CTNNB1:</strong> Beta-catenin pathway activation</p>
              <p><strong>Association:</strong> Endometriosis</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Mucinous Carcinoma</h3>
            <div className="space-y-2 text-sm">
              <p><strong>KRAS mutations:</strong> Very common</p>
              <p><strong>HER2 amplification:</strong> Subset</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sex Cord-Stromal */}
      <Card>
        <CardHeader>
          <CardTitle>Sex Cord-Stromal Tumors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-3">Adult Granulosa Cell Tumor</h3>
            <div className="space-y-2 text-sm">
              <p><strong>FOXL2 mutation:</strong> ~95% (c.402C{'>'}G, p.C134W)</p>
              <p><strong>Specificity:</strong> Highly specific for adult granulosa cell tumor</p>
              <p><strong>Utility:</strong> Diagnostic in difficult cases</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Juvenile Granulosa Cell Tumor</h3>
            <div className="space-y-2 text-sm">
              <p><strong>FOXL2:</strong> Wild-type (negative)</p>
              <p><strong>Mutations:</strong> GNAS, AKT1 in subset</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cervical HPV */}
      <Card>
        <CardHeader>
          <CardTitle>Cervical HPV Oncogenesis</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm">
            <p><strong>High-risk HPV types:</strong> 16, 18 (most common), 31, 33, 35, 45, 52, 58</p>
            <p><strong>Viral oncoproteins:</strong></p>
            <p className="ml-4 text-muted-foreground">
              • <strong>E6:</strong> Degrades p53 → loss of cell cycle control<br />
              • <strong>E7:</strong> Inactivates RB → allows S-phase entry
            </p>
            <p><strong>Result:</strong> Loss of cell cycle checkpoints → dysplasia/cancer</p>
            <p><strong>p16 expression:</strong> Overexpression due to RB inactivation (biomarker for high-risk HPV)</p>
          </div>
        </CardContent>
      </Card>

      {/* Lynch Syndrome */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">Lynch Syndrome (Hereditary Non-Polyposis Colorectal Cancer)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm">
            <p><strong>Genes:</strong> MLH1, MSH2, MSH6, PMS2, EPCAM</p>
            <p><strong>Inheritance:</strong> Autosomal dominant</p>
            <p><strong>Cancer risks:</strong></p>
            <p className="ml-4 text-muted-foreground">
              • Colorectal cancer<br />
              • Endometrial cancer (40-60% lifetime risk)<br />
              • Ovarian cancer (10-12%)<br />
              • Others: gastric, urinary tract, small bowel
            </p>
            <p><strong>Screening:</strong> Universal MMR IHC or MSI testing on endometrial carcinomas recommended</p>
            <p><strong>If MMR loss:</strong> Consider germline testing after ruling out sporadic (MLH1 hypermethylation)</p>
            <p className="text-destructive font-semibold">
              Clinical significance: Affects patient surveillance and family cascade testing
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Testing Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Molecular Testing Methods (Conceptual)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">IHC-based</h4>
              <p className="text-sm text-muted-foreground">
                • MMR proteins (MLH1, PMS2, MSH2, MSH6)<br />
                • p53<br />
                • p16<br />
                Advantages: Rapid, widely available
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">Sequencing-based</h4>
              <p className="text-sm text-muted-foreground">
                • POLE mutation testing<br />
                • NGS panels<br />
                • BRCA testing<br />
                Advantages: Detects specific mutations
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">MSI Testing</h4>
              <p className="text-sm text-muted-foreground">
                PCR-based microsatellite analysis<br />
                Detects MMR deficiency
              </p>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold mb-2">HPV Testing</h4>
              <p className="text-sm text-muted-foreground">
                • HPV DNA/RNA testing<br />
                • p16 IHC (surrogate)<br />
                • In-situ hybridization
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clinical Integration */}
      <Card className="border-blue-500/50">
        <CardHeader>
          <CardTitle className="text-blue-600 dark:text-blue-400">Clinical Integration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p>✓ Molecular classification guides prognosis and treatment selection</p>
          <p>✓ POLE mutations → excellent prognosis, may avoid aggressive therapy</p>
          <p>✓ MMR deficiency → immunotherapy (pembrolizumab) effective</p>
          <p>✓ HRD/BRCA mutations → PARP inhibitor sensitivity</p>
          <p>✓ Lynch syndrome → affects surveillance for patient and family</p>
          <p className="text-muted-foreground italic">
            Remember: These are conceptual frameworks for education, not for clinical decision-making
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Molecular;
