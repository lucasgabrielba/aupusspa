import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronsUpDown, Info, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function UsersTable() {
  const navigate = useNavigate();
  const [selectedFiltro, setSelectedFiltro] = useState("Todos (5)");
  const [dialogOpen, setDialogOpen] = useState(false);
  const filtros = ["Todos (5)", "Cativo (3)", "Usineiro (1)", "Locatário (1)"];

  const usuarios = [
    { nome: "Marcelo Paraíba", status: "Ativo", perfil: "Cativo" },
    { nome: "Hypernova Headphones...", status: "Ativo", perfil: "Cativo" },
    { nome: "AeroGlow Desk Lamp...", status: "Ativo", perfil: "Cativo" },
    { nome: "TechTonic Energy Drink...", status: "Ativo", perfil: "Usineiro" },
    { nome: "Gamer Gear Pro Controller...", status: "Ativo", perfil: "Locatário" },
  ];

  const [search, setSearch] = useState("");

  const filteredUsuarios = usuarios.filter((usuario) => {
    const filtroAtivo = selectedFiltro === "Todos (5)" || usuario.perfil === selectedFiltro.split(" ")[0];
    const buscaAtiva = search === "" || usuario.nome.toLowerCase().includes(search.toLowerCase());
    return filtroAtivo && buscaAtiva;
  });

  return (
    <Card className="w-full">
      <CardHeader className="gap-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <CardTitle className="text-xl font-medium">Usuários</CardTitle>
            <CardDescription>
              Visualize e gerencie os usuários do sistema
            </CardDescription>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="default"
                className="bg-card-foreground text-card rounded-xs flex gap-2 items-center"
              >
                <UserPlus className="w-4 h-4" />
                Novo usuário
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-card text-card-foreground p-6 rounded-md shadow-lg">
              <DialogHeader className="mb-4">
                <DialogTitle className="text-xl font-semibold">
                  Qual o tipo de usuário que deseja criar?
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                  Texto de apoio
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                {["Cativo", "Usineiro", "Locatário", "Aupus"].map((tipo) => (
                  <Button
                    key={tipo}
                    variant="outline"
                    onClick={() => navigate(`/usuarios/novo/${tipo.toLowerCase()}`)}
                    className="w-full h-24 flex-col items-start bg-secondary text-secondary-foreground hover:bg-secondary-hover hover:text-secondary-foreground-hover rounded-md shadow-sm px-4"
                  >
                    <span className="text-2xl font-medium">{tipo}</span>
                    <span className="text-sm text-muted-foreground">Detalhe</span>
                  </Button>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="block lg:hidden w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center bg-card-foreground text-card justify-between w-full px-4 py-2 rounded-sm cursor-pointer gap-2">
                <span>{selectedFiltro}</span>
                <ChevronsUpDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {filtros.map((f) => (
                  <DropdownMenuItem
                    key={f}
                    onClick={() => setSelectedFiltro(f)}
                    className="cursor-pointer text-sm"
                  >
                    {f}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="hidden lg:flex gap-2 bg-secondary rounded-sm h-10 p-1 items-center w-auto justify-start">
            {filtros.map((f) => (
              <Button
                key={f}
                className={`px-4 py-1 h-8 text-sm font-medium rounded-xs ${selectedFiltro === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-card hover:text-card-foreground text-card-foreground"
                  }`}
                onClick={() => setSelectedFiltro(f)}
              >
                {f}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="mb-2">Pesquisar por:</label>
            <div className="flex gap-2">
              <Input
                placeholder="Digite para pesquisar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 rounded-sm bg-card"
              />
              <Button variant="default" className="bg-card-foreground text-card rounded-xs">
                Pesquisar
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium text-sm">Nome</TableHead>
              <TableHead className="font-medium text-sm">Status</TableHead>
              <TableHead className="font-medium text-sm">Perfil</TableHead>
              <TableHead className="font-medium text-sm"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsuarios.map((usuario, index) => (
              <TableRow key={index}>
                <TableCell className="text-sm">{usuario.nome}</TableCell>
                <TableCell className="text-sm">
                  <Badge variant="green" className="text-xs">
                    {usuario.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">{usuario.perfil}</TableCell>
                <TableCell>
                  <button className="text-card-foreground hover:text-card">
                    <Info size={16} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="text-sm text-muted-foreground mt-2">
          Exibindo {filteredUsuarios.length} de {usuarios.length} usuários
        </p>
      </CardContent>
    </Card>
  );
}
