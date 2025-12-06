import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

const Placenta = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="w-4 h-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Placental Pathology</h1>
          <p className="text-muted-foreground">Vascular malperfusion, infections, and implantation disorders</p>
        </div>
      </div>

      {/* Normal Placenta */}
      <Card>
        <CardHeader>
          <CardTitle>Normal Placental Anatomy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Villous Structure</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Stem villi:</strong> Large villi with muscular vessels and stromal core<br />
              <strong>Terminal villi:</strong> Small, terminal branches for gas/nutrient exchange<br />
              <strong>Trophoblast layers:</strong> Syncytiotrophoblast (outer), cytotrophoblast (inner, sparse in term)<br />
              <strong>Fetal vessels:</strong> Within villous stroma
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Villous Maturation</h3>
            <p className="text-sm text-muted-foreground">
              Progressive increase in terminal villi, syncytial knots, vasculosyncytial membranes with advancing
              gestational age.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* MVM */}
      <Card>
        <CardHeader>
          <CardTitle>Maternal Vascular Malperfusion (MVM)</CardTitle>
          <CardDescription>Patterns of uteroplacental insufficiency</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Overview</h3>
            <p className="text-sm text-muted-foreground">
              Decreased maternal blood flow to the placenta. Associated with preeclampsia, maternal hypertension,
              chronic uteroplacental insufficiency.
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Accelerated villous maturation:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Increased syncytial knots, increased vasculosyncytial membranes beyond expected for gestational age
              </p>
              <p><strong>Distal villous hypoplasia:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Reduced branching of terminal villi, increased intervillous space
              </p>
              <p><strong>Villous infarction:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Ischemic villous necrosis. Affects {'>'}5% placental volume (significant)
              </p>
              <p><strong>Retroplacental hematoma:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Blood between placenta and uterine wall (placental abruption)
              </p>
              <p><strong>Decidual vasculopathy:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Acute atherosis, fibrinoid necrosis of maternal vessels
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Clinical Associations</h3>
            <p className="text-sm text-muted-foreground">
              Fetal growth restriction (FGR), preeclampsia, stillbirth, oligohydramnios
            </p>
          </div>
        </CardContent>
      </Card>

      {/* FVM */}
      <Card>
        <CardHeader>
          <CardTitle>Fetal Vascular Malperfusion (FVM)</CardTitle>
          <CardDescription>Patterns of fetoplacental vascular obstruction</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Overview</h3>
            <p className="text-sm text-muted-foreground">
              Decreased fetal blood flow through placental vessels. Associated with umbilical cord complications,
              fetal thrombotic vasculopathy.
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Avascular/fibrotic villi:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Villous stromal fibrosis, loss of fetal vessels (ghost villi)
              </p>
              <p><strong>Stem vessel thrombosis:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Thrombi in chorionic plate or stem villous vessels
              </p>
              <p><strong>Intramural fibrin deposition:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Fibrin within vessel walls of stem villi
              </p>
              <p><strong>Villous stromal-vascular karyorrhexis:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Nuclear fragmentation in villous stroma and endothelium (acute hypoxia/ischemia)
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Clinical Associations</h3>
            <p className="text-sm text-muted-foreground">
              Cord accidents (true knot, torsion, stricture), fetal thrombophilia, twin-twin transfusion syndrome (TTTS)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Infections */}
      <Card>
        <CardHeader>
          <CardTitle>Placental Infections & Inflammation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Acute Chorioamnionitis</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Maternal neutrophilic response</p>
              <p><strong>Progression:</strong></p>
              <p className="ml-4 text-muted-foreground">
                Stage 1: Acute subchorionitis (infiltrate in chorion-decidua interface)<br />
                Stage 2: Acute chorionitis (infiltrate in chorion layer)<br />
                Stage 3: Acute chorioamnionitis (infiltrate reaches amnion)
              </p>
              <p><strong>Clinical:</strong> Ascending bacterial infection, preterm labor, maternal fever</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Acute Funisitis</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Fetal neutrophilic response in umbilical cord</p>
              <p><strong>Progression:</strong> Umbilical phlebitis → arteritis → necrotizing funisitis</p>
              <p className="text-muted-foreground italic">
                Indicates fetal inflammatory response syndrome (FIRS)
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Villitis of Unknown Etiology (VUE)</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Chronic lymphohistiocytic inflammation in terminal villi</p>
              <p><strong>Distribution:</strong> Patchy/focal (not diffuse)</p>
              <p><strong>Features:</strong> Villous stromal lymphocytes, histiocytes, villous agglutination, obliterative fetal vasculopathy</p>
              <p><strong>Etiology:</strong> Likely maternal anti-fetal rejection</p>
              <p><strong>Clinical:</strong> Recurrence risk in subsequent pregnancies, association with FGR</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Chronic Intervillositis</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Pattern:</strong> Histiocytes in intervillous space (not in villous stroma)</p>
              <p><strong>Features:</strong> Maternal inflammatory cells, fibrin deposition</p>
              <p><strong>Clinical:</strong> High recurrence rate, associated with pregnancy loss/FGR</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Specific Infections</h3>
            <div className="space-y-2 text-sm">
              <p><strong>TORCH:</strong> Toxoplasma, Other (syphilis, VZV), Rubella, CMV, HSV</p>
              <p><strong>CMV:</strong> Villitis, intranuclear inclusions ("owl's eye"), hemosiderin</p>
              <p><strong>Syphilis:</strong> Villous enlargement, villitis, endovasculitis, increased fetal nucleated RBCs</p>
              <p><strong>Listeria:</strong> Microabscesses in placenta, chorioamnionitis</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implantation Disorders */}
      <Card>
        <CardHeader>
          <CardTitle>Abnormal Implantation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Placenta Accreta Spectrum</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Accreta:</strong> Villi attach directly to myometrium (no decidua)</p>
              <p><strong>Increta:</strong> Villi invade into myometrium</p>
              <p><strong>Percreta:</strong> Villi penetrate through serosa/into adjacent organs</p>
              <p><strong>Histology:</strong> Absent decidua basalis, villi directly on myometrium</p>
              <p><strong>Risk factors:</strong> Prior C-section, placenta previa, prior uterine surgery</p>
              <p className="text-muted-foreground italic">
                Often diagnosed clinically/radiologically; pathology confirms
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cord/Membranes */}
      <Card>
        <CardHeader>
          <CardTitle>Umbilical Cord & Membrane Lesions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Cord Abnormalities</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Single umbilical artery:</strong> Associated with congenital anomalies<br />
              <strong>True knot:</strong> Can cause FVM if tight<br />
              <strong>Cord stricture:</strong> Focal narrowing, can cause FVM<br />
              <strong>Velamentous insertion:</strong> Cord inserts into membranes, not placental disk
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Membrane Abnormalities</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Circummarginate placenta:</strong> Chorionic plate smaller than basal plate, raised edge<br />
              <strong>Circumvallate placenta:</strong> More pronounced ridge with folded membranes
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Twins */}
      <Card>
        <CardHeader>
          <CardTitle>Twin Placentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Chorionicity & Amnionicity</h3>
            <p className="text-sm text-muted-foreground">
              <strong>Dichorionic-diamniotic:</strong> Two separate placentas or fused with dividing membrane (4 layers)<br />
              <strong>Monochorionic-diamniotic:</strong> Single placenta, thin dividing membrane (2 layers)<br />
              <strong>Monochorionic-monoamniotic:</strong> Single sac, no dividing membrane
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Twin-Twin Transfusion Syndrome (TTTS)</h3>
            <p className="text-sm text-muted-foreground">
              Monochorionic twins. Vascular anastomoses cause unbalanced transfusion. Donor twin: growth restriction,
              oligohydramnios. Recipient twin: polyhydramnios, hydrops. Look for color difference (pale vs congested).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Pitfalls */}
      <Card className="border-yellow-500/50">
        <CardHeader>
          <CardTitle className="text-yellow-600 dark:text-yellow-500">Common Pitfalls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm">
            <p className="font-semibold">⚠️ VUE vs Infectious Villitis</p>
            <p className="text-muted-foreground">
              VUE: chronic, patchy, no organisms. Infectious: look for inclusions, granulomas, specific patterns.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Overcalling Infarcts</p>
            <p className="text-muted-foreground">
              Small peripheral infarcts are common. Clinically significant if {'>'}5% placental volume.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">⚠️ Distinguishing MVM from FVM</p>
            <p className="text-muted-foreground">
              MVM: accelerated maturation, distal hypoplasia. FVM: avascular villi, stem vessel thrombosis.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Placenta;
