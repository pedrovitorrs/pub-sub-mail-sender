import { Router } from "express";
import IRoutes from "./protocols/IRoutes";
import ExpressRouteAdapter from "../adapters/ExpressRouteAdapter";
import useCases from "../../presentation/useCases";

export default class MailRoutes implements IRoutes<Router> {
  route(router: Router): Router {
    /**
     * @apiVersion 0.0.0
     * @api {post} /api/v1/mail Mail Sender
     * @apiName Mail
     * @apiGroup V1
     * @apiBody { string } To Especifica o destinatário
     * @apiBody { string } From Especifica o remetente
     * @apiBody { string } Subject Especifica o assunto
     * @apiBody { string } Hmtl Especifica o conteúdo
     * @apiSuccess { Object } result resultado da operação
     * @apiSuccessExample { json } Success-Response:
     *   HTTP/1.1 201 CREATED
     *   {}
     * @apiErrorExample {json} Error-Response:
     *     HTTP/1.1 422 Not Found
     *     {
     *       "errors": [
     *          {
     *             "error": "Error Message"
     *         }
     *       ]
     *     }
     */
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
