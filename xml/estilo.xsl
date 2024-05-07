<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" doctype-public="XSLT-compat" doctype-system="about:legacy-compat" />
    <xsl:key name="departamento-key" match="empleado" use="departamento" />

    <xsl:template name="printNombre">
        <xsl:param name="nombreText" />
        <xsl:param name="posicio" />
        <xsl:value-of select="$posicio" />
        - <xsl:value-of select="$nombreText" />
    </xsl:template>

    <xsl:template match="/empleados">
        <html>
            <head>
                <title>Lista de Empleados</title>
                <link rel="stylesheet" type="text/css" href="estilos.css" />
            </head>
            <body>
                <h1>Empleados de la Compañía</h1>
                <table>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Número de Habilidades</th>
                    </tr>
                    <xsl:for-each select="empleado">
                        <xsl:sort select="nombre" />
                        <xsl:variable name="boolHabilidadesDefinidas"
                            select="count(habilidades) > 0" />
                        <xsl:variable name="cantidadHabilidades"
                            select="count(habilidades/habilidad)" />
                        <tr>
                            <xsl:comment>Usamos AVT para el atributo src</xsl:comment>
                            <td>
                                <img src="{imagenPerfil/@location}" alt="Perfil de {nombre}"
                                    width="100" />
                            </td>
                            <td>

                                <xsl:choose>
                                    <xsl:when test="nombre/@perfil!='' ">
                                        <a href="{nombre/@perfil}" target="_blank">
                                            <xsl:call-template name="printNombre">
                                                <xsl:with-param name="nombreText" select="nombre" />
                                                <xsl:with-param name="posicio" select="position()" />

                                            </xsl:call-template>
                                        </a>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:call-template name="printNombre">
                                            <xsl:with-param name="nombreText" select="nombre" />
                                            <xsl:with-param name="posicio" select="position()" />
                                        </xsl:call-template>
                                    </xsl:otherwise>
                                </xsl:choose>

                            </td>
                            <td>
                                <xsl:value-of select="departamento" />
                            </td>
                            <td>
                                <xsl:if test="$cantidadHabilidades = 0">

                                    <xsl:attribute name="class">
                                        vermell
                                    </xsl:attribute>

                                </xsl:if>

                                <xsl:choose>
                                    <xsl:when test="not($boolHabilidadesDefinidas)">
                                        Sin habilidades definidas
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="$cantidadHabilidades" />
                                    </xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h2>Resumen por Departamento</h2>
                <table>
                    <tr>
                        <th>Departamento</th>
                        <th>Número de Empleados</th>
                    </tr>
                    <xsl:for-each
                        select="empleado[count(. | key('departamento-key', departamento)[1]) = 1]">
                        <tr>
                            <td>
                                <xsl:value-of select="departamento" />
                            </td>
                            <td>
                                <xsl:value-of select="count(key('departamento-key', departamento))" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>


</xsl:stylesheet>