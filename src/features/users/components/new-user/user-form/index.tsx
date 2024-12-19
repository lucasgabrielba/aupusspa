import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
} from "@/components/ui/form";

export type UserType = "cativo" | "usineiro" | "locatario" | "aupus";

const fullSchema = z.object({
  nomeCliente: z.string().nonempty("Nome do cliente é obrigatório"),
  cpfCnpj: z.string().nonempty("CPF/CNPJ é obrigatório"),
  cidade: z.string().nonempty("Cidade é obrigatória"),
  estado: z.string().nonempty("Estado é obrigatório"),
  cep: z.string().nonempty("CEP é obrigatório"),
  telefone: z.string().nonempty("Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),

  nomeResponsavel: z.string().nonempty("Nome do responsável é obrigatório"),
  modulo: z.string().nonempty("Módulo é obrigatório"),

  capacidadeCadastro: z.string().nonempty("Capacidade de cadastro é obrigatória"),
  opcaoTitularidade: z.string().nonempty("Opção de titularidade é obrigatória"),
  permissaoAcesso: z.string().nonempty("Permissão de acesso é obrigatória"),

  cadastrarUsuariosAssociados: z.string().nonempty("Selecione se deseja cadastrar usuários associados"),
  tipoUsuario: z.string().nonempty("Selecione um tipo de usuário"),

  tipoTaxa: z.string().nonempty("Selecione um tipo de taxa"),
  taxaAdministracao: z.string().nonempty("Taxa de administração é obrigatória"),
  tipoTaxaOeM: z.string().nonempty("Selecione um tipo de taxa O&M"),
  custoOeM: z.string().nonempty("Custo de operação e manutenção (O&M) é obrigatório"),
});

const reducedSchema = z.object({
  nomeCliente: z.string().nonempty("Nome do cliente é obrigatório"),
  cpfCnpj: z.string().nonempty("CPF/CNPJ é obrigatório"),
  cidade: z.string().nonempty("Cidade é obrigatória"),
  estado: z.string().nonempty("Estado é obrigatório"),
  cep: z.string().nonempty("CEP é obrigatório"),
  telefone: z.string().nonempty("Telefone é obrigatório"),
  email: z.string().email("E-mail inválido"),

  nomeResponsavel: z.string().optional(),
  modulo: z.string().optional(),

  capacidadeCadastro: z.string().optional(),
  opcaoTitularidade: z.string().optional(),
  permissaoAcesso: z.string().optional(),

  cadastrarUsuariosAssociados: z.string().optional(),
  tipoUsuario: z.string().optional(),

  tipoTaxa: z.string().optional(),
  taxaAdministracao: z.string().optional(),
  tipoTaxaOeM: z.string().optional(),
  custoOeM: z.string().optional(),
});

function getSchemaByUserType(type: UserType) {
  if (type === "cativo") {
    return fullSchema;
  } else {
    return reducedSchema;
  }
}

type FormValues = z.infer<typeof fullSchema>;

interface UserFormProps {
  userType: UserType;
}

export function UserForm({ userType }: UserFormProps) {
  const schema = getSchemaByUserType(userType);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      nomeCliente: "",
      cpfCnpj: "",
      cidade: "",
      estado: "",
      cep: "",
      telefone: "",
      email: "",

      nomeResponsavel: "",
      modulo: "",

      capacidadeCadastro: "",
      opcaoTitularidade: "",
      permissaoAcesso: "",

      cadastrarUsuariosAssociados: "",
      tipoUsuario: "",

      tipoTaxa: "",
      taxaAdministracao: "",
      tipoTaxaOeM: "",
      custoOeM: ""
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  console.log(userType);


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 rounded-sm border border-tertiary bg-card"
              onClick={() => navigate('/usuarios')}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">
              {userType === "cativo" ? "Novo Cliente Cativo" : `Novo Cliente ${userType.charAt(0).toUpperCase() + userType.slice(1)}`}
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="border bg-card rounded-sm" variant="default" type="button" onClick={() => navigate('/usuarios')}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-card-foreground text-card rounded-sm">Cadastrar</Button>
          </div>
        </div>

        {/* STEP 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">1. Informações básicas do cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="nomeCliente"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do cliente</FormLabel>
                    <FormControl>
                      <Input placeholder="Inserir nome do cliente" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpfCnpj"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF/CNPJ</FormLabel>
                    <FormControl>
                      <Input placeholder="Inserir CPF/CNPJ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cidade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade</FormLabel>
                    <FormControl>
                      <Input placeholder="Inserir nome da cidade" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="estado"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estado</FormLabel>
                    <FormControl>
                      <Input placeholder="Inserir estado" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CEP</FormLabel>
                    <FormControl>
                      <Input placeholder="Inserir CEP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="Inserir telefone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input placeholder="Inserir e-mail" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* STEPS 2 a 5 - Apenas se for cativo */}
        {userType === "cativo" && (
          <>
            {/* STEP 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Detalhes de gestão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nomeResponsavel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do responsável</FormLabel>
                        <FormControl>
                          <Input placeholder="Insira o nome do responsável" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="modulo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Qual módulo será utilizado?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione os módulos" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="modulo1">Módulo 1</SelectItem>
                              <SelectItem value="modulo2">Módulo 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* STEP 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. Configuração de unidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="capacidadeCadastro"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Capacidade de cadastro</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="capacidade1">Capacidade 1</SelectItem>
                              <SelectItem value="capacidade2">Capacidade 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="opcaoTitularidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Opção de titularidade</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="opcao1">Opção 1</SelectItem>
                              <SelectItem value="opcao2">Opção 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="permissaoAcesso"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Permissão de acesso por usuários</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="permissao1">Permissão 1</SelectItem>
                              <SelectItem value="permissao2">Permissão 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* STEP 4 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Configuração de usuários</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="cadastrarUsuariosAssociados"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>O cliente deseja cadastrar usuários associados a ele?</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sim">Sim</SelectItem>
                              <SelectItem value="nao">Não</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tipoUsuario"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de usuário</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="admin">Admin</SelectItem>
                              <SelectItem value="gerente">Gerente</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* STEP 5 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">5. Custos e Taxas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <FormField
                    control={form.control}
                    name="tipoTaxa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de taxa</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="taxa1">Taxa 1</SelectItem>
                              <SelectItem value="taxa2">Taxa 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="taxaAdministracao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Taxa de administração</FormLabel>
                        <FormControl>
                          <Input placeholder="Inserir taxa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tipoTaxaOeM"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo de taxa (O&M)</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="oem1">O&M 1</SelectItem>
                              <SelectItem value="oem2">O&M 2</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="custoOeM"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Custo de operação e manutenção (O&M)</FormLabel>
                        <FormControl>
                          <Input placeholder="Inserir custo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </form>
    </Form>
  );
}
