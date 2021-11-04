import cookieCutter from 'cookie-cutter';

/**
 * Uma função que verifica se o cookie de um token existe
 * @param {*} router um OBJETO geranda da função useRouter
 * da biblioteca do NEXT
 * @returns caso o cookie não exista, redireciona a página
 * para a tela de Login
 */
export const cookieVerifyHome = (router) => {
  if (!cookieCutter.get('token')) {
    return router.push('/login');
  }
};

/**
 * Uma função que verifica se o cookie de um token existe
 * @param {*} router um OBJETO geranda da função useRouter
 * da biblioteca do NEXT
 * @returns caso o cookie não exista, redireciona a página
 * para a tela de Login
 */

export const cookieVerifyLogin = (router) => {
  if (cookieCutter.get('token')) {
    return router.push('/');
  }
};

export default { cookieVerifyHome, cookieVerifyLogin };
