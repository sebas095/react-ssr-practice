export enum ErrorType {
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  MISSING_REQUIRED_FIELDS = 'MISSING_REQUIRED_FIELDS',
  METHOD_NOT_ALLOWED = 'METHOD_NOT_ALLOWED',
  MLIBRE_REQUEST_ERROR = 'MLIBRE_REQUEST_ERROR',
}

export type TError = Error & {
  id: ErrorType;
  statusCode?: number;
};

export const defaultError = {
  id: ErrorType.INTERNAL_ERROR,
  statusCode: 500,
  message: 'Ha ocurrido un error inesperado, intente mas tarde.',
};

export const ErrorValue = {
  INTERNAL_ERROR: {
    id: ErrorType.INTERNAL_ERROR,
    statusCode: 500,
    message: 'Ha ocurrido un error interno, intenta más tarde.',
  },
  NOT_FOUND: {
    id: ErrorType.NOT_FOUND,
    statusCode: 404,
    message: 'El recurso no existe o no tienes privilegios para acceder.',
  },
  MISSING_REQUIRED_FIELDS: {
    id: ErrorType.MISSING_REQUIRED_FIELDS,
    statusCode: 422,
    message: 'Faltan campos que son obligatorios.',
  },
  METHOD_NOT_ALLOWED: {
    id: ErrorType.METHOD_NOT_ALLOWED,
    statusCode: 405,
    message: 'Método no soportado.',
  },
  MLIBRE_REQUEST_ERROR: defaultError,
};
