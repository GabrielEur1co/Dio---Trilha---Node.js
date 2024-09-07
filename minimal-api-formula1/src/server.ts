import fastify from "fastify";
import cors from "@fastify/cors"

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
    methods: ["GET", "POST"]
})

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "McLaren", base: "Milton Kaynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italia" },
];

const pilots = [
  {
    id: 1,
    name: "lewis Hamilton",
    equipe: "Mercedes",
    Nacionalidade: "Reino Unido",
  },
  {
    id: 2,
    name: "Max Verstappen",
    equipe: "Red Bull Racing",
    Nacionalidade: "Holanda",
  },
  {
    id: 3,
    name: "Fernando Alonso",
    equipe: "Aston Martin Racing",
    Nacionalidade: "Espanha",
  },
  {
    id: 4,
    name: "Nico Hulkenberg",
    equipe: "Haas F1 Team",
    Nacionalidade: "Alemanha",
  },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return { teams };
});
server.get("/pilots", async (request, response) => {
  response.type("application/json").code(200);

  return { pilots };
});

interface PilotsParams {
  id: string;
}

server.get<{ Params: PilotsParams }>(
  "/pilots/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const pilot = pilots.find((p) => p.id === id);

    if (!pilot) {
      response.type("application/json").code(404);
      return { message: "Pilot Not Found" };
    } else {
      response.type("application/json").code(200);
      return { pilot };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Sever iniciado");
});
