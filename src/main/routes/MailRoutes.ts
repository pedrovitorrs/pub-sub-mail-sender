import { Router } from "express";
import IRoutes from "./protocols/IRoutes";
import ExpressRouteAdapter from "../adapters/ExpressRouteAdapter";
import useCases from "../../presentation/useCases";

export default class MailRoutes implements IRoutes<Router> {
  route(router: Router): Router {
    router.post(
      "/",
      ExpressRouteAdapter.route(
        useCases.mail.sendMailController.handle.bind(
          useCases.mail.sendMailController
        )
      )
    );

    return router;
  }
}
